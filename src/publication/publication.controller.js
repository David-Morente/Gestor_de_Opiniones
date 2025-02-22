import Publications from "./publication.model.js"

export const createPublication = async (req, res) => {
    try{
        const data = req.body

        const categorie = await Categories.create(data)
        return res.status(201).json({
            message: "Publicación creada",
            categorie
        })

    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            message: "Fallo al crear publicación",
            error: err.message
        })
    }
}

export const getPublication = async(req, res) => {
    try{
        const { limits = 3, from = 0} = req.query
        const query = {status: true}

        const [ total, publication ] = await Promise.all([
            Publications.countDocuments(query),
            Publications.find(query)
                .skip(Number(from))
                .limit(Number(limits))
        ])

        return res.status(200).json({
            success: true,
            total,
            publication
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al listar las publicaciones",
            error: err.message
        })
    }
}

export const findPublicationById = async(req, res) => {
    try{
        const { uid } = req.params;
        const publication = await Publications.findById(uid)


        if(!categorie){
            return res.status(404).json({
                success: false,
                message: "La publicación no existe",
                error: err.message
            })
        }

        return res.status(200).json({
            success: true,
            publication
        })

    } catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Error al obtener la publicación",
            error: err.message
        })
    }
}

export const deletePublication = async (req, res) => {
    try{
        const { uid } = req. params

        const categorie =  await Categories.findByIdAndUpdate(uid, {status: false}, {new: true})

        return res.status(200).json({
            success: true,
            message: "Publicación eliminada",
            categorie
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al eliminar la publicación",
            error: err.message
        })
    }
}

export const updatePublication = async (req, res) => {
    try {
        const { uid } = req.params;
        const  data  = req.body;

        const publication = await Publications.findByIdAndUpdate(uid, data, { new: true });

        res.status(200).json({
            success: true,
            message: "Publicación actualizada",
            publication,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar la publicación',
            error: err.message
        });
    }
}