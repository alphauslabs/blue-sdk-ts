"use strict";
// Copyright 2017 Google Inc.
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
exports.ServiceSchema = exports.file_google_api_service = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const annotations_pb_1 = require("./annotations_pb");
const auth_pb_1 = require("./auth_pb");
const backend_pb_1 = require("./backend_pb");
const billing_pb_1 = require("./billing_pb");
const context_pb_1 = require("./context_pb");
const control_pb_1 = require("./control_pb");
const documentation_pb_1 = require("./documentation_pb");
const endpoint_pb_1 = require("./endpoint_pb");
const http_pb_1 = require("./http_pb");
const log_pb_1 = require("./log_pb");
const logging_pb_1 = require("./logging_pb");
const metric_pb_1 = require("./metric_pb");
const monitored_resource_pb_1 = require("./monitored_resource_pb");
const monitoring_pb_1 = require("./monitoring_pb");
const quota_pb_1 = require("./quota_pb");
const source_info_pb_1 = require("./source_info_pb");
const system_parameter_pb_1 = require("./system_parameter_pb");
const usage_pb_1 = require("./usage_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file google/api/service.proto.
 */
exports.file_google_api_service = (0, codegenv2_1.fileDesc)("Chhnb29nbGUvYXBpL3NlcnZpY2UucHJvdG8SCmdvb2dsZS5hcGki3AcKB1NlcnZpY2USNAoOY29uZmlnX3ZlcnNpb24YFCABKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWUSDAoEbmFtZRgBIAEoCRIKCgJpZBghIAEoCRINCgV0aXRsZRgCIAEoCRIbChNwcm9kdWNlcl9wcm9qZWN0X2lkGBYgASgJEiIKBGFwaXMYAyADKAsyFC5nb29nbGUucHJvdG9idWYuQXBpEiQKBXR5cGVzGAQgAygLMhUuZ29vZ2xlLnByb3RvYnVmLlR5cGUSJAoFZW51bXMYBSADKAsyFS5nb29nbGUucHJvdG9idWYuRW51bRIwCg1kb2N1bWVudGF0aW9uGAYgASgLMhkuZ29vZ2xlLmFwaS5Eb2N1bWVudGF0aW9uEiQKB2JhY2tlbmQYCCABKAsyEy5nb29nbGUuYXBpLkJhY2tlbmQSHgoEaHR0cBgJIAEoCzIQLmdvb2dsZS5hcGkuSHR0cBIgCgVxdW90YRgKIAEoCzIRLmdvb2dsZS5hcGkuUXVvdGESMgoOYXV0aGVudGljYXRpb24YCyABKAsyGi5nb29nbGUuYXBpLkF1dGhlbnRpY2F0aW9uEiQKB2NvbnRleHQYDCABKAsyEy5nb29nbGUuYXBpLkNvbnRleHQSIAoFdXNhZ2UYDyABKAsyES5nb29nbGUuYXBpLlVzYWdlEicKCWVuZHBvaW50cxgSIAMoCzIULmdvb2dsZS5hcGkuRW5kcG9pbnQSJAoHY29udHJvbBgVIAEoCzITLmdvb2dsZS5hcGkuQ29udHJvbBInCgRsb2dzGBcgAygLMhkuZ29vZ2xlLmFwaS5Mb2dEZXNjcmlwdG9yEi0KB21ldHJpY3MYGCADKAsyHC5nb29nbGUuYXBpLk1ldHJpY0Rlc2NyaXB0b3ISRAoTbW9uaXRvcmVkX3Jlc291cmNlcxgZIAMoCzInLmdvb2dsZS5hcGkuTW9uaXRvcmVkUmVzb3VyY2VEZXNjcmlwdG9yEiQKB2JpbGxpbmcYGiABKAsyEy5nb29nbGUuYXBpLkJpbGxpbmcSJAoHbG9nZ2luZxgbIAEoCzITLmdvb2dsZS5hcGkuTG9nZ2luZxIqCgptb25pdG9yaW5nGBwgASgLMhYuZ29vZ2xlLmFwaS5Nb25pdG9yaW5nEjcKEXN5c3RlbV9wYXJhbWV0ZXJzGB0gASgLMhwuZ29vZ2xlLmFwaS5TeXN0ZW1QYXJhbWV0ZXJzEisKC3NvdXJjZV9pbmZvGCUgASgLMhYuZ29vZ2xlLmFwaS5Tb3VyY2VJbmZvSgQIZRBmQm4KDmNvbS5nb29nbGUuYXBpQgxTZXJ2aWNlUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvc2VydmljZWNvbmZpZztzZXJ2aWNlY29uZmlnogIER0FQSWIGcHJvdG8z", [annotations_pb_1.file_google_api_annotations, auth_pb_1.file_google_api_auth, backend_pb_1.file_google_api_backend, billing_pb_1.file_google_api_billing, context_pb_1.file_google_api_context, control_pb_1.file_google_api_control, documentation_pb_1.file_google_api_documentation, endpoint_pb_1.file_google_api_endpoint, http_pb_1.file_google_api_http, log_pb_1.file_google_api_log, logging_pb_1.file_google_api_logging, metric_pb_1.file_google_api_metric, monitored_resource_pb_1.file_google_api_monitored_resource, monitoring_pb_1.file_google_api_monitoring, quota_pb_1.file_google_api_quota, source_info_pb_1.file_google_api_source_info, system_parameter_pb_1.file_google_api_system_parameter, usage_pb_1.file_google_api_usage, wkt_1.file_google_protobuf_api, wkt_1.file_google_protobuf_type, wkt_1.file_google_protobuf_wrappers]);
/**
 * Describes the message google.api.Service.
 * Use `create(ServiceSchema)` to create a new message.
 */
exports.ServiceSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_service, 0);
