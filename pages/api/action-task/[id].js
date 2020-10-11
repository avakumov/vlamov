import ActionTask from '../../../models/action-task'
import dbConnect from '../../../utils/db-connect'

export default async function handler(req, res) {
    const {
        query: { id },
        method
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const actionTask = await ActionTask.findById(id)
                if (!actionTask) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: actionTask })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const actionTask = await ActionTask.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if (!actionTask) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: actionTask })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedActionTask = await ActionTask.deleteOne({ _id: id })
                if (!deletedActionTask) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}
