import { PodcastTransferModel } from "../models/podcastTransfer.model";
import { repositoryPodcast } from "../repository/podcasts.repository";
import { StatusCode } from "../utils/StatusCode";



export const serviceFilterEpisodes = async (podcastName: string | undefined ): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);
    
    return  {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };
}
