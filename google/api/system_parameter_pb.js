"use strict";
// Copyright 2018 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemParameterSchema = exports.SystemParameterRuleSchema = exports.SystemParametersSchema = exports.file_google_api_system_parameter = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
/**
 * Describes the file google/api/system_parameter.proto.
 */
exports.file_google_api_system_parameter = (0, codegenv2_1.fileDesc)("CiFnb29nbGUvYXBpL3N5c3RlbV9wYXJhbWV0ZXIucHJvdG8SCmdvb2dsZS5hcGkiQgoQU3lzdGVtUGFyYW1ldGVycxIuCgVydWxlcxgBIAMoCzIfLmdvb2dsZS5hcGkuU3lzdGVtUGFyYW1ldGVyUnVsZSJYChNTeXN0ZW1QYXJhbWV0ZXJSdWxlEhAKCHNlbGVjdG9yGAEgASgJEi8KCnBhcmFtZXRlcnMYAiADKAsyGy5nb29nbGUuYXBpLlN5c3RlbVBhcmFtZXRlciJRCg9TeXN0ZW1QYXJhbWV0ZXISDAoEbmFtZRgBIAEoCRITCgtodHRwX2hlYWRlchgCIAEoCRIbChN1cmxfcXVlcnlfcGFyYW1ldGVyGAMgASgJQnYKDmNvbS5nb29nbGUuYXBpQhRTeXN0ZW1QYXJhbWV0ZXJQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9zZXJ2aWNlY29uZmlnO3NlcnZpY2Vjb25maWeiAgRHQVBJYgZwcm90bzM");
/**
 * Describes the message google.api.SystemParameters.
 * Use `create(SystemParametersSchema)` to create a new message.
 */
exports.SystemParametersSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_system_parameter, 0);
/**
 * Describes the message google.api.SystemParameterRule.
 * Use `create(SystemParameterRuleSchema)` to create a new message.
 */
exports.SystemParameterRuleSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_system_parameter, 1);
/**
 * Describes the message google.api.SystemParameter.
 * Use `create(SystemParameterSchema)` to create a new message.
 */
exports.SystemParameterSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_system_parameter, 2);
