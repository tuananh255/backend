import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../models'
// thêm muối vào pass :v
const hashPassword = password=> bcrypt.hashSync(password,bcrypt.genSaltSync(10))
export const register=(data)=> new Promise(async(resolve,reject)=>{
    try {
        // findOrCreate  trả về một mảng [data,boolean]
        const response = await db.User.findOrCreate({
            where:{ email: data.email}, // search in db
            defaults:{  // nếu không tìm thấy thì tạo mới
                name:data.name,
                email:data.email,
                password: hashPassword(data.password),
                phone : data.phone,
                status : data.status,
                role : data.role
            }
        })
        // mã hoá token từ dữ liệu đó , hết hạn token
        const token = response[1] ? jwt.sign({id:response[0].id,email:response[0].email,role:response[0].role},process.env.JWT_SECRET,{expiresIn:'2d'}) : null
        resolve({
            err: response[1] ? 0 : 1,
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone
            },
            message:response[1] ? 'Đăng ký thành công' : 'Email đã được sử dụng',
            'access_token' : token ? `Bearer ${token}` : null
        })
    } catch (error) {
        reject(error)
    }
})

export const login=({email,password})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.User.findOne({
            where:{ email},
            raw:true
        })
        const isChecked = response && bcrypt.compareSync(password,response.password)
        const token = isChecked ? jwt.sign({id:response.id,email:response.email,role:response.role},process.env.JWT_SECRET,{expiresIn:'2d'}) : null
        resolve({
            err: token ? 0 : 1,
            user: {
                name: response.name,
                email: response.email,
                phone: response.phone,
                token : token ? token : null
            },
            message: token ? 'Đăng nhập thành công' : response ? 'Mật khẩu sai':'Email chưa được đăng ký',
            // 'access_token' : token ? token : null
        })
    } catch (error) {
        reject(error)
    }
})


export const getAllUser=()=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.User.findAll({
            raw: true
        });
        resolve({
            message: 'Lấy tất cả người dùng thành công',
            users: response
        });
    } catch (error) {
        reject(error);
    }
})

export const getUserId=(id)=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.User.findOne({
            where: { id: id },
            raw: true
        });
        if (response) {
            resolve({
                message: 'Tìm người dùng thành công',
                user: response
            });
        } else {
            resolve({
                message: 'Người dùng không tìm thấy',
                user: null
            });
        }
    } catch (error) {
        reject(error);
    }
})

export const updateUserById = (id, userData) => new Promise(async (resolve, reject) => {
    try {
        const user = await db.User.findOne({ where: { id: id } });
        if (user) {
            await user.update(userData);
            resolve({
                message: 'Cập nhật thành công',
                user: user
            });
        } else {
            resolve({
                message: 'Người dùng không tìm thấy',
                user: null
            });
        }
    } catch (error) {
        reject(error);
    }
});

export const deleteUserById = (id) => new Promise(async (resolve, reject) => {
    try {
        const user = await db.User.findOne({ where: { id: id } });
        if (user) {
            await user.destroy();

            resolve({
                message: 'Xóa thành công',
                user: null
            });
        } else {
            resolve({
                message: 'Người dùng không tìm thấy',
                user: null
            });
        }
    } catch (error) {
        reject(error);
    }
});
