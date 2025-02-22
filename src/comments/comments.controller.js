import Comments from "./comments.model.js"

export const createComment = async (req, res) => {
    try{
        const data = req.body

        const categorie = await Categories.create(data)
        return res.status(201).json({
            message: "Comentario agregado",
            categorie
        })

    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            message: "Fallo al agregar el comentario",
            error: err.message
        })
    }
}

export const getComment = async(req, res) => {
    try{
        const { limits = 3, from = 0} = req.query
        const query = {status: true}

        const [ total, comment ] = await Promise.all([
            Comments.countDocuments(query),
            Comments.find(query)
                .skip(Number(from))
                .limit(Number(limits))
        ])

        return res.status(200).json({
            success: true,
            total,
            comment
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al listar los comentarios",
            error: err.message
        })
    }
}

export const findCommentById = async(req, res) => {
    try{
        const { uid } = req.params;
        const comment = await Comments.findById(uid)


        if(!categorie){
            return res.status(404).json({
                success: false,
                message: "El comentario no existe",
                error: err.message
            })
        }

        return res.status(200).json({
            success: true,
            comment
        })

    } catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Error al obtener el comentario",
            error: err.message
        })
    }
}

export const deleteComment = async (req, res) => {
    try{
        const { uid } = req. params

        const comment =  await Comments.findByIdAndUpdate(uid, {status: false}, {new: true})

        return res.status(200).json({
            success: true,
            message: "Comentario eliminado",
            comment
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el comentario",
            error: err.message
        })
    }
}

export const updateComment = async (req, res) => {
    try {
        const { uid } = req.params;
        const  data  = req.body;

        const comment = await Comments.findByIdAndUpdate(uid, data, { new: true });

        res.status(200).json({
            success: true,
            message: "Comentario actualizado",
            comment,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar el comentario',
            error: err.message
        });
    }
}