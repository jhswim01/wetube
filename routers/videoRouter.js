import express from "express";
import routes from "../routes";
import {
  video,
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.videos, video);

// upload ideo
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// video detail
videoRouter.get(routes.videoDetail(), videoDetail);

// edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
