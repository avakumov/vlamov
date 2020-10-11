import Attachment from '../../../models/attachment'
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
                const attachment = await Attachment.findById(id)
                if (!attachment) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: attachment })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const attachment = await Attachment.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if (!attachment) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: attachment })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedAttachment = await Attachment.deleteOne({ _id: id })
                if (!deletedAttachment) {
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
