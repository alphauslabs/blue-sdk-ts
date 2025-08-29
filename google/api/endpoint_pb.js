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
exports.EndpointSchema = exports.file_google_api_endpoint = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const annotations_pb_1 = require("./annotations_pb");
/**
 * Describes the file google/api/endpoint.proto.
 */
exports.file_google_api_endpoint = (0, codegenv2_1.fileDesc)("Chlnb29nbGUvYXBpL2VuZHBvaW50LnByb3RvEgpnb29nbGUuYXBpIl8KCEVuZHBvaW50EgwKBG5hbWUYASABKAkSDwoHYWxpYXNlcxgCIAMoCRIQCghmZWF0dXJlcxgEIAMoCRIOCgZ0YXJnZXQYZSABKAkSEgoKYWxsb3dfY29ycxgFIAEoCEJvCg5jb20uZ29vZ2xlLmFwaUINRW5kcG9pbnRQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9zZXJ2aWNlY29uZmlnO3NlcnZpY2Vjb25maWeiAgRHQVBJYgZwcm90bzM", [annotations_pb_1.file_google_api_annotations]);
/**
 * Describes the message google.api.Endpoint.
 * Use `create(EndpointSchema)` to create a new message.
 */
exports.EndpointSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_endpoint, 0);
