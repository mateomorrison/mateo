import db from '../../private/db'

export default async (req, res) => {
    await db();
}