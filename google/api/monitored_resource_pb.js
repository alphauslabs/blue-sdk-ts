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
exports.MonitoredResourceMetadataSchema = exports.MonitoredResourceSchema = exports.MonitoredResourceDescriptorSchema = exports.file_google_api_monitored_resource = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const label_pb_1 = require("./label_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file google/api/monitored_resource.proto.
 */
exports.file_google_api_monitored_resource = (0, codegenv2_1.fileDesc)("CiNnb29nbGUvYXBpL21vbml0b3JlZF9yZXNvdXJjZS5wcm90bxIKZ29vZ2xlLmFwaSKRAQobTW9uaXRvcmVkUmVzb3VyY2VEZXNjcmlwdG9yEgwKBG5hbWUYBSABKAkSDAoEdHlwZRgBIAEoCRIUCgxkaXNwbGF5X25hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSKwoGbGFiZWxzGAQgAygLMhsuZ29vZ2xlLmFwaS5MYWJlbERlc2NyaXB0b3IiiwEKEU1vbml0b3JlZFJlc291cmNlEgwKBHR5cGUYASABKAkSOQoGbGFiZWxzGAIgAygLMikuZ29vZ2xlLmFwaS5Nb25pdG9yZWRSZXNvdXJjZS5MYWJlbHNFbnRyeRotCgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBIsoBChlNb25pdG9yZWRSZXNvdXJjZU1ldGFkYXRhEi4KDXN5c3RlbV9sYWJlbHMYASABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0EkoKC3VzZXJfbGFiZWxzGAIgAygLMjUuZ29vZ2xlLmFwaS5Nb25pdG9yZWRSZXNvdXJjZU1ldGFkYXRhLlVzZXJMYWJlbHNFbnRyeRoxCg9Vc2VyTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4AUJ5Cg5jb20uZ29vZ2xlLmFwaUIWTW9uaXRvcmVkUmVzb3VyY2VQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9tb25pdG9yZWRyZXM7bW9uaXRvcmVkcmVz+AEBogIER0FQSWIGcHJvdG8z", [label_pb_1.file_google_api_label, wkt_1.file_google_protobuf_struct]);
/**
 * Describes the message google.api.MonitoredResourceDescriptor.
 * Use `create(MonitoredResourceDescriptorSchema)` to create a new message.
 */
exports.MonitoredResourceDescriptorSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_monitored_resource, 0);
/**
 * Describes the message google.api.MonitoredResource.
 * Use `create(MonitoredResourceSchema)` to create a new message.
 */
exports.MonitoredResourceSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_monitored_resource, 1);
/**
 * Describes the message google.api.MonitoredResourceMetadata.
 * Use `create(MonitoredResourceMetadataSchema)` to create a new message.
 */
exports.MonitoredResourceMetadataSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_monitored_resource, 2);
