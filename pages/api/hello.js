export default (req, res) => {
    const db = process.env.MONGODB_CONNECT
    res.status(200).json({ db: `${db}` })
}
