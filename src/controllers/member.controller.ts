import { Response, Request } from 'express'
import { memberService } from 'src/services'

const getAllMembers = async (req: Request, res: Response) => {
  const allMembers = await memberService.getAllMembers()
  res.send({ status: 'OK', data: allMembers })
}

export default {
  getAllMembers
}
