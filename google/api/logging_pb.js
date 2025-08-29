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
exports.Logging_LoggingDestinationSchema = exports.LoggingSchema = exports.file_google_api_logging = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const annotations_pb_1 = require("./annotations_pb");
/**
 * Describes the file google/api/logging.proto.
 */
exports.file_google_api_logging = (0, codegenv2_1.fileDesc)("Chhnb29nbGUvYXBpL2xvZ2dpbmcucHJvdG8SCmdvb2dsZS5hcGki1wEKB0xvZ2dpbmcSRQoVcHJvZHVjZXJfZGVzdGluYXRpb25zGAEgAygLMiYuZ29vZ2xlLmFwaS5Mb2dnaW5nLkxvZ2dpbmdEZXN0aW5hdGlvbhJFChVjb25zdW1lcl9kZXN0aW5hdGlvbnMYAiADKAsyJi5nb29nbGUuYXBpLkxvZ2dpbmcuTG9nZ2luZ0Rlc3RpbmF0aW9uGj4KEkxvZ2dpbmdEZXN0aW5hdGlvbhIaChJtb25pdG9yZWRfcmVzb3VyY2UYAyABKAkSDAoEbG9ncxgBIAMoCUJuCg5jb20uZ29vZ2xlLmFwaUIMTG9nZ2luZ1Byb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYXBpL3NlcnZpY2Vjb25maWc7c2VydmljZWNvbmZpZ6ICBEdBUEliBnByb3RvMw", [annotations_pb_1.file_google_api_annotations]);
/**
 * Describes the message google.api.Logging.
 * Use `create(LoggingSchema)` to create a new message.
 */
exports.LoggingSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_logging, 0);
/**
 * Describes the message google.api.Logging.LoggingDestination.
 * Use `create(Logging_LoggingDestinationSchema)` to create a new message.
 */
exports.Logging_LoggingDestinationSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_logging, 0, 0);
