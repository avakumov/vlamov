import Award from '../../../models/award'
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
                const award = await Award.findById(id)
                if (!award) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: award })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const award = await Award.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if (!award) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: award })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedAward = await Award.deleteOne({ _id: id })
                if (!deletedAward) {
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
