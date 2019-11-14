import { ContentModel } from "~model/content-model";
import { init, SDK } from "dc-extensions-sdk";


export class SdkManager {
  public static sdk: SDK<ContentModel>;

  public static async init() {
    this.sdk = await init<ContentModel>();
  }

  public static async getContent(allowedTypes: string[]) {
    return await this.sdk.contentLink.get(allowedTypes);
  }

  public static async getImage() {
    return await this.sdk.mediaLink.getImage();
  }
}