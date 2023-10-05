const AdminModel = require("../models/AdminModel");


class AdminService {
    // read
    async read(req, res) {
        try {
            const admins = await AdminModel.find({})
            return admins
        } catch (error) {
            console.log(error)
        }

    }

    //create
    async createAdmin(name, email, hashedPassword, filename, path) {
        try {
          const createAdmin = await AdminModel.create({
            name: name,
            email: email,
            password: hashedPassword,
            img: {
              filename: filename,
              path: path,
            },
          });
      
          return createAdmin;

        } catch (error) {
            console.log(error)
        }
    }

    // update

    async getAdminbyid(req, res) {
        try {
            const id = req.params.id;
            const adminbyid = await AdminModel.findById({ _id: id })
            return adminbyid
        } catch (error) {
            console.log(error)
        }
    };

    async updateAdmin(req, res) {
        try {
            const id = req.params.id;
            const updateadmin = await AdminModel.findByIdAndUpdate({ _id: id }, {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            })
            return updateadmin
        } catch (error) {
            console.log(error)
        }
    }

    //Delete admin 
     async deletAdmin (req, res) {
    try {
        const id = req.params.id;
        await AdminModel.findByIdAndDelete({ _id: id })
        return 
    } catch (error) {
        console.log(error)
    }
};



}

module.exports = new AdminService();