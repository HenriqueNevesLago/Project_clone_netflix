import axios from 'axios';
import { getCompanyAcronym } from '@/app/core/base/companyAcronym';

interface GetParams {
  url: string;
  queryString?: string;
  headers?: object;
  options?: object;
  path?: any;
}

interface PostParams {
  url?: string;
  queryString?: string;
  headers?: object;
  options?: object;
  body?: any;
  path?: any;
}

export interface IHttpAdapter {
  get(p: GetParams): Promise<any>;
  post(p: PostParams): Promise<any>;
  request(p: any): Promise<any>;
  put(request?: PostParams): Promise<any>;
  patch(request?: PostParams): Promise<any>;
  delete(p: PostParams): Promise<any>;
}

export class HttpAdapter implements IHttpAdapter {
  private baseUrl: string | undefined;
  private initialHeaders: object;

  constructor(baseUrl?: string, initialHeaders?: object) {
    this.baseUrl = baseUrl ?? undefined;
    this.initialHeaders = initialHeaders || {};
  }

  delete(p: PostParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = this.baseUrl
      ? `${this.baseUrl}${p.path}${qs}`
      : `${p.url}${qs}`;
    let headers = { ...this.initialHeaders, ...p.headers };

    if (getCompanyAcronym()) {
      headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
    }

    return axios.delete(urlCall, {
      data: p.body,
      headers,
      timeout: 300000,
      ...p.options,
    });
  }

  put(p: PostParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = this.baseUrl
      ? `${this.baseUrl}${p.path}${qs}`
      : `${p.url}${qs}`;
    let headers = { ...this.initialHeaders, ...p.headers };

    if (getCompanyAcronym()) {
      headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
    }

    return axios.put(urlCall, p.body, {
      headers,
      timeout: 300000,
      ...p.options,
    });
  }

  patch(p: PostParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = this.baseUrl
      ? `${this.baseUrl}${p.path}${qs}`
      : `${p.url}${qs}`;
    let headers = { ...this.initialHeaders, ...p.headers };

    if (getCompanyAcronym()) {
      headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
    }

    return axios.patch(urlCall, p.body, {
      headers,
      timeout: 300000,
      ...p.options,
    });
  }

  post(p: PostParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = this.baseUrl
      ? `${this.baseUrl}${p.path}${qs}`
      : `${p.url}${qs}`;
    let headers = { ...this.initialHeaders, ...p.headers };

    if (getCompanyAcronym()) {
      headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
    }

    return axios.post(urlCall, p.body, {
      headers,
      timeout: 300000,
      ...p.options,
    });
  }

  get(p: GetParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = this.baseUrl
      ? `${this.baseUrl}${p.path}${qs}`
      : `${p.url}${qs}`;
    const headers = { ...this.initialHeaders, ...p.headers };
    return axios.get(urlCall, { headers, ...p.options });
  }

  request(p: any): Promise<any> {
    return axios.request(p);
  }
}
