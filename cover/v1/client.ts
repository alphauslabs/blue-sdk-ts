import { Cover } from './cover_pb'
import { BlueAPIService, ConnectOption } from '../../conn/conn'

export function NewCoverClient(...opts: ConnectOption[]) {
    const blueapi = new BlueAPIService(Cover, "cover", opts)
    return blueapi.clientInstance
}