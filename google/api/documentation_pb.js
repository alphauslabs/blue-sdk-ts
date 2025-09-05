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
exports.PageSchema = exports.DocumentationRuleSchema = exports.DocumentationSchema = exports.file_google_api_documentation = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
/**
 * Describes the file google/api/documentation.proto.
 */
exports.file_google_api_documentation = (0, codegenv2_1.fileDesc)("Ch5nb29nbGUvYXBpL2RvY3VtZW50YXRpb24ucHJvdG8SCmdvb2dsZS5hcGkioQEKDURvY3VtZW50YXRpb24SDwoHc3VtbWFyeRgBIAEoCRIfCgVwYWdlcxgFIAMoCzIQLmdvb2dsZS5hcGkuUGFnZRIsCgVydWxlcxgDIAMoCzIdLmdvb2dsZS5hcGkuRG9jdW1lbnRhdGlvblJ1bGUSHgoWZG9jdW1lbnRhdGlvbl9yb290X3VybBgEIAEoCRIQCghvdmVydmlldxgCIAEoCSJbChFEb2N1bWVudGF0aW9uUnVsZRIQCghzZWxlY3RvchgBIAEoCRITCgtkZXNjcmlwdGlvbhgCIAEoCRIfChdkZXByZWNhdGlvbl9kZXNjcmlwdGlvbhgDIAEoCSJJCgRQYWdlEgwKBG5hbWUYASABKAkSDwoHY29udGVudBgCIAEoCRIiCghzdWJwYWdlcxgDIAMoCzIQLmdvb2dsZS5hcGkuUGFnZUJ0Cg5jb20uZ29vZ2xlLmFwaUISRG9jdW1lbnRhdGlvblByb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYXBpL3NlcnZpY2Vjb25maWc7c2VydmljZWNvbmZpZ6ICBEdBUEliBnByb3RvMw");
/**
 * Describes the message google.api.Documentation.
 * Use `create(DocumentationSchema)` to create a new message.
 */
exports.DocumentationSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_documentation, 0);
/**
 * Describes the message google.api.DocumentationRule.
 * Use `create(DocumentationRuleSchema)` to create a new message.
 */
exports.DocumentationRuleSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_documentation, 1);
/**
 * Describes the message google.api.Page.
 * Use `create(PageSchema)` to create a new message.
 */
exports.PageSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_documentation, 2);
