import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
 const { data } = await axios.get(
  `https://api.thecatapi.com/v1/images/${req.query.id}`,
  {
   headers: {
    'Content-type': 'application/json',
    'x-api-key':
     'live_YjJgRJ2MhOPTkpQzcU19Bk0PHN4bbtvLbzFA2zw6PKZpqyMDFBisnCVT4jHwVe3z',
   },
  }
 )
 res.send(data)
}

export default handler
