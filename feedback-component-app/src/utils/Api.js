import axios from "axios";
import { baseUrl, appUrl /* , corsHelper */ } from "../config";

/**
 * Usage:
 * const api = new Api(baseUrl);
 * api.request('feedback', { method: "get", ... });
 */
class Api {
  constructor() {
    this.resources = {};
    this.configs = {};
    if (!this._isProduction()) {
      this.configs.headers = {
        "X-Requested-With": appUrl
      };
    }

    this._init();
  }

  /* The key method to request a resource. */
  async request(resourceName, configs = {}) {
    // all options: https://github.com/axios/axios#request-config
    await this._checkResources();
    try {
      const url = this.resources[resourceName];
      configs.url = this._parseUrl(url);
      configs = { ...configs, ...this.configs };
      const { data } = await axios(configs);
      return data;
    } catch (e) {
      // TODO: error handling
    }
  }

  /* Get all available resources. */
  async _init() {
    try {
      const configs = {
        url: this._parseUrl(baseUrl),
        // url: corsHelper + "http://google.com/",
        ...this.configs
      };
      const { data } = await axios(configs);
      const links = data._links;
      this._initResources(links);
      Promise.resolve();
    } catch (e) {
      // TODO: error handling
    }
  }

  _initResources(resourceLinks) {
    Object.keys(resourceLinks).forEach(key => {
      this.resources[key] = resourceLinks[key].href;
    });
  }

  async _checkResources() {
    if (Object.keys(this.resources).length === 0) {
      // empty resources
      await this._init();
    }
    Promise.resolve();
  }

  _isProduction() {
    return process.env.NODE_ENV === "production";
  }

  _parseUrl(url) {
    // return this._isProduction() ? url : corsHelper + url;
    return url;
  }
}

const api = new Api(baseUrl);

export default api;
