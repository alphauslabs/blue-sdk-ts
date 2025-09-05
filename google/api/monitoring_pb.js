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
exports.Monitoring_MonitoringDestinationSchema = exports.MonitoringSchema = exports.file_google_api_monitoring = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const annotations_pb_1 = require("./annotations_pb");
/**
 * Describes the file google/api/monitoring.proto.
 */
exports.file_google_api_monitoring = (0, codegenv2_1.fileDesc)("Chtnb29nbGUvYXBpL21vbml0b3JpbmcucHJvdG8SCmdvb2dsZS5hcGki7AEKCk1vbml0b3JpbmcSSwoVcHJvZHVjZXJfZGVzdGluYXRpb25zGAEgAygLMiwuZ29vZ2xlLmFwaS5Nb25pdG9yaW5nLk1vbml0b3JpbmdEZXN0aW5hdGlvbhJLChVjb25zdW1lcl9kZXN0aW5hdGlvbnMYAiADKAsyLC5nb29nbGUuYXBpLk1vbml0b3JpbmcuTW9uaXRvcmluZ0Rlc3RpbmF0aW9uGkQKFU1vbml0b3JpbmdEZXN0aW5hdGlvbhIaChJtb25pdG9yZWRfcmVzb3VyY2UYASABKAkSDwoHbWV0cmljcxgCIAMoCUJxCg5jb20uZ29vZ2xlLmFwaUIPTW9uaXRvcmluZ1Byb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYXBpL3NlcnZpY2Vjb25maWc7c2VydmljZWNvbmZpZ6ICBEdBUEliBnByb3RvMw", [annotations_pb_1.file_google_api_annotations]);
/**
 * Describes the message google.api.Monitoring.
 * Use `create(MonitoringSchema)` to create a new message.
 */
exports.MonitoringSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_monitoring, 0);
/**
 * Describes the message google.api.Monitoring.MonitoringDestination.
 * Use `create(Monitoring_MonitoringDestinationSchema)` to create a new message.
 */
exports.Monitoring_MonitoringDestinationSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_monitoring, 0, 0);
