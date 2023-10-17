import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HouseService {
    async getHouse() {
        const house = await dbContext.Houses.find()
        return house
    }
    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest(`This ID: ${houseId} sucks and is not good`)
        }
        return house
    }

}

export const houseService = new HouseService()