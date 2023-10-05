const {
    read,
    getAdminbyid,
    updateAdmin,
    deletAdmin,
    createAdmin,
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
        console.log(req.file)
        try {
            const { filename, path } = req.file;

            const { name, email, hashedPassword } = req.body;
            await createAdmin(name, email, hashedPassword, filename, path);
        
            res.status(200).send('File and Admin details uploaded successfully.');
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