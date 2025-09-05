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
exports.UsageRuleSchema = exports.UsageSchema = exports.file_google_api_usage = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const annotations_pb_1 = require("./annotations_pb");
/**
 * Describes the file google/api/usage.proto.
 */
exports.file_google_api_usage = (0, codegenv2_1.fileDesc)("ChZnb29nbGUvYXBpL3VzYWdlLnByb3RvEgpnb29nbGUuYXBpImoKBVVzYWdlEhQKDHJlcXVpcmVtZW50cxgBIAMoCRIkCgVydWxlcxgGIAMoCzIVLmdvb2dsZS5hcGkuVXNhZ2VSdWxlEiUKHXByb2R1Y2VyX25vdGlmaWNhdGlvbl9jaGFubmVsGAcgASgJIl0KCVVzYWdlUnVsZRIQCghzZWxlY3RvchgBIAEoCRIgChhhbGxvd191bnJlZ2lzdGVyZWRfY2FsbHMYAiABKAgSHAoUc2tpcF9zZXJ2aWNlX2NvbnRyb2wYAyABKAhCbAoOY29tLmdvb2dsZS5hcGlCClVzYWdlUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvc2VydmljZWNvbmZpZztzZXJ2aWNlY29uZmlnogIER0FQSWIGcHJvdG8z", [annotations_pb_1.file_google_api_annotations]);
/**
 * Describes the message google.api.Usage.
 * Use `create(UsageSchema)` to create a new message.
 */
exports.UsageSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_usage, 0);
/**
 * Describes the message google.api.UsageRule.
 * Use `create(UsageRuleSchema)` to create a new message.
 */
exports.UsageRuleSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_usage, 1);
