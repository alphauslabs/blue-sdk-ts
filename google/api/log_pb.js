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
exports.LogDescriptorSchema = exports.file_google_api_log = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const label_pb_1 = require("./label_pb");
/**
 * Describes the file google/api/log.proto.
 */
exports.file_google_api_log = (0, codegenv2_1.fileDesc)("ChRnb29nbGUvYXBpL2xvZy5wcm90bxIKZ29vZ2xlLmFwaSJ1Cg1Mb2dEZXNjcmlwdG9yEgwKBG5hbWUYASABKAkSKwoGbGFiZWxzGAIgAygLMhsuZ29vZ2xlLmFwaS5MYWJlbERlc2NyaXB0b3ISEwoLZGVzY3JpcHRpb24YAyABKAkSFAoMZGlzcGxheV9uYW1lGAQgASgJQmoKDmNvbS5nb29nbGUuYXBpQghMb2dQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9zZXJ2aWNlY29uZmlnO3NlcnZpY2Vjb25maWeiAgRHQVBJYgZwcm90bzM", [label_pb_1.file_google_api_label]);
/**
 * Describes the message google.api.LogDescriptor.
 * Use `create(LogDescriptorSchema)` to create a new message.
 */
exports.LogDescriptorSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_log, 0);
