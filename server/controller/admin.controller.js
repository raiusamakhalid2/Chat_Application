const {
    createAdmin,
    read,
    getAdminbyid,
    updateAdmin,
    deletAdmin
} = require("../service/admin.service");

class AdminController {

    async read_admins(req, res) {
        try {
            const reveived = await read(req, res)
            res.json(reveived)
        } catch (error) {
            console.error(error)
        }
    }

    async create_admin(req, res) {
        try {
            const adminCreated = await createAdmin(req, res)
            res.json(adminCreated)
        } catch (error) {
            console.error(error)
        }
    }

    async get_adminbyid(req, res) {
        try {
            const getedAdminbyid = await getAdminbyid(req, res)
            res.json(getedAdminbyid)

        } catch (error) {
            console.error(error)
        }
    }

    async update_admin(req, res) {
        try {
            const adminUpdated = await updateAdmin(req, res)
            res.json(adminUpdated)
        } catch (error) {
            console.error(error)
        }
    }

    async delete_admin(req, res) {
        try {
            const adminDeleted = await deletAdmin(req, res)
            res.json(adminDeleted) 
        } catch (error) {
            console.error(error)
        }
    }


}

module.exports = new AdminController();