import { Response, Request } from 'express'
import memberService from 'src/services/memberService'

const getAllMembers = async (req: Request, res: Response) => {
  const allMembers = await memberService.getAllMembers()
  res.send({ status: 'OK', data: allMembers })
}

export default {
  getAllMembers
}
