import CodeGenerator from "./_CodeGenerator";

export class PythonRequestsGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    let code = `import http.client\n`;
    code += `conn = http.client.HTTPSConnection('${this.baseUrl}')\n`;
    code += `conn.request('${this.method}', '${url}'`;
    return code;
  }

  generateFooterFile(url) {
    let code = `response = conn.getresponse()\n`;
    code += `print(response.read().decode())\n`;
    code += `conn.close()\n`;
    return code;
  }

  generateMimeTypeHeader() {
    let code = `\nheaders = {\n`;
    code += `'Content-type': '${this.mimeType}'\n`;
    code += `}\n`;
    code += `conn.request_headers.update(headers)\n`;
    return code;
  }

  generateHeaders() {
    let code = `\nheaders = {\n`;
    this.params
      .filter((param) => param.in === 'headers')
      .forEach((param) => {
        code += `'${param.name}': '${param.value}',\n`;
      });
    code += `}\n`;
    code += `conn.request_headers.update(headers)\n`;
    return code;
  }

  generateQueryParams() {
    let code = `\nurl += '?'\n`;
    this.params
      .filter((param) => param.in === 'query')
      .forEach((param, index) => {
        if (index > 0) {
          code += `url += '&'`;
        }
        code += `url += '${param.name}=${param.value}'\n`;
      });
    return code;
  }

  generateJsonPostData() {
    let code = `\nimport json\n`;
    code += `payload = json.dumps({\n`;
    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param, index) => {
        if (index > 0) {
          code += ',\n';
        }
        code += `'${param.name}': '${param.value}'`;
      });
    code += `})\n`;
    code += `conn.request_body = payload.encode()\n`;
    return code;
  }

  generateMultipartPostData() {
    let code = `\nimport requests\n`;
    code += `files = {\n`;
    this.params
      .filter((param) => param.in === 'postData' && param.type === 'file')
      .forEach((param) => {
        code += `'${param.name}': ('${param.path}', open('${param.path}', 'rb'), 'application/octet-stream')`;
      });
    code += `}\n`;
    code += `response = requests.post('${this.baseUrl}${this.url}', files=files)\n`;
    return code;
  }

  generateOtherPostData() {
    let code = `\nimport http.client\n`;
    code += `payload = ''\n`;
    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        code += `payload += '${param.name}=${param.value}&'\n`;
      });
    code += `payload = payload[:-1]\n`;
    code += `conn.request_body = payload.encode()\n`;
    return code;
  }

  generateCookie() {
    let code = `\ncookies = {\n`;
    this.params
      .filter((param) => param.in === 'cookie')
      .forEach((param) => {
        code += `'${param.name}': '${param.value}',\n`;
      });
    code += `}\n`;
    code += `cookie_string = http.client.cookies.format_cookies(cookies)\n`;
    code += `conn.request_headers['Cookie'] = cookie_string\n`;

    return code;
  }
}

export default PythonRequestsGenerator;
