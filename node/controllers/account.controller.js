const accounts = [
    {
        id: 1,
        username: "tuong01",
        role: 'user'
    },
    {
        id: 2,
        username: "tuong02",
        role: 'admin'
    },
]

module.exports = {
    getAccounts: (req, res) => {
        return res.status(200).json(accounts)
    }
}