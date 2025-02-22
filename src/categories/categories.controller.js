import Categories from "./categories.model.js"

export const createCategorie = async (req, res) => {
    try{
        const data = req.body

        const categorie = await Categories.create(data)
        return res.status(201).json({
            message: "Categoría creada",
            categorie
        })

    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            message: "Fallo al crear categoría",
            error: err.message
        })
    }
}

export const getCategories = async(req, res) => {
    try{
        const { limits = 3, from = 0} = req.query
        const query = {status: true}

        const [ total, categories ] = await Promise.all([
            Categories.countDocuments(query),
            Categories.find(query)
                .skip(Number(from))
                .limit(Number(limits))
        ])

        return res.status(200).json({
            success: true,
            total,
            categories
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al listar las categorías",
            error: err.message
        })
    }
}

export const findCategorieById = async(req, res) => {
    try{
        const { uid } = req.params;
        const categorie = await Categories.findById(uid)


        if(!categorie){
            return res.status(404).json({
                success: false,
                message: "La categoría no existe",
                error: err.message
            })
        }

        return res.status(200).json({
            success: true,
            categorie
        })

    } catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Error al obtener la categoría",
            error: err.message
        })
    }
}

export const deleteCategorie = async (req, res) => {
    try{
        const { uid } = req. params

        const categorie =  await Categories.findByIdAndUpdate(uid, {status: false}, {new: true})

        return res.status(200).json({
            success: true,
            message: "Categoría eliminada",
            categorie
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al eliminar la categoría",
            error: err.message
        })
    }
}

export const updateCategorie = async (req, res) => {
    try {
        const { uid } = req.params;
        const  data  = req.body;

        const categorie = await Categories.findByIdAndUpdate(uid, data, { new: true });

        res.status(200).json({
            success: true,
            message: "Categoría actualizada",
            categorie,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar la categoría',
            error: err.message
        });
    }
}