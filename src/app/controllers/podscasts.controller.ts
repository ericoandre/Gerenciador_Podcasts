import { IncomingMessage, ServerResponse } from "http";
import { ContentType } from "../utils/contentType";

const defaultContent = { "Content-Type": ContentType.JSON };

import { serviceListEpisodes } from "../services/listEpisodes.service";
import { serviceFilterEpisodes } from "../services/filterepisodes.service";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse ) => {
    const content: PodcastTransferModel = await serviceListEpisodes();
    
    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));
    
    res.end();
}

export const getFilterEpisodes = async (req: IncomingMessage,res: ServerResponse) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));

    res.end();
};

