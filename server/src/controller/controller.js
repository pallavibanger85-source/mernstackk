import model from '../model/model.js'


export const register = async (req, res) => {
  try {
    const data = req.body
    const { name, email, password, gender } = data
    const checkUser = await model.findOneAndUpdate({ email: email })
    if (checkUser) return res.status(400).send({ status: false, msg: 'user already exist' })

    const DB = await model.create(data)

    res.status(200).send({ status: true, success: true, msg: 'user account created', data:DB})

  }
  catch (err) {
    res.status(500).send({ status: false, success: false, msg: err.message })
  }

}
export const verify = async (req, res) => {
  try {
  }
  catch (err) {
    res.status(500).send({ status: false, success: false, msg: err.message })
  }

}
export const login = async (req, res) => {
  try {
  }
  catch (err) {
    res.status(500).send({ status: false, success: false, msg: err.message })
  }

}