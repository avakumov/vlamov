import Attachment from '../../../models/attachment'
import dbConnect from '../../../utils/db-connect'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const attachments = await Attachment.find(
                    {}
                ) /* find all the data in our database */
                res.status(200).json({ success: true, data: attachments })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const attachment = await Attachment.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: attachment })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
