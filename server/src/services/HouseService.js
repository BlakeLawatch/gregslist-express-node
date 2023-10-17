import { dbContext } from "../db/DbContext.js"

class HouseService {
    async getHouse() {
        const house = await dbContext.Houses.find()
        return house
    }

}

export const houseService = new HouseService()