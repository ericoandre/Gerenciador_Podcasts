import { PodcastTransferModel } from "../models/podcastTransfer.model";
import { repositoryPodcast } from "../repository/podcasts.repository";
import { StatusCode } from "../utils/StatusCode";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };
    
    const data = await repositoryPodcast();
    
    return {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };
};