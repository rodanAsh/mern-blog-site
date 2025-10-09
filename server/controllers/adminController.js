import jwt from 'jsonwebtoken'

export const adminLogin = async(req, res) => {
    try {

        const { email, password } = req.body;

        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }

        // generate jwt token
        const token = jwt.sign({email}, process.env.AUTH_SECRET)

        res.json({ success: true, token })
        
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}