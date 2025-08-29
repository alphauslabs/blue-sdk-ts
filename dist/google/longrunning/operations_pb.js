"use strict";
// Copyright 2019 Google LLC.
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
exports.operation_info = exports.Operations = exports.OperationInfoSchema = exports.WaitOperationRequestSchema = exports.DeleteOperationRequestSchema = exports.CancelOperationRequestSchema = exports.ListOperationsResponseSchema = exports.ListOperationsRequestSchema = exports.GetOperationRequestSchema = exports.OperationSchema = exports.file_google_longrunning_operations = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const annotations_pb_1 = require("../api/annotations_pb");
const client_pb_1 = require("../api/client_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
const status_pb_1 = require("../rpc/status_pb");
/**
 * Describes the file google/longrunning/operations.proto.
 */
exports.file_google_longrunning_operations = (0, codegenv2_1.fileDesc)("CiNnb29nbGUvbG9uZ3J1bm5pbmcvb3BlcmF0aW9ucy5wcm90bxISZ29vZ2xlLmxvbmdydW5uaW5nIqgBCglPcGVyYXRpb24SDAoEbmFtZRgBIAEoCRImCghtZXRhZGF0YRgCIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSDAoEZG9uZRgDIAEoCBIjCgVlcnJvchgEIAEoCzISLmdvb2dsZS5ycGMuU3RhdHVzSAASKAoIcmVzcG9uc2UYBSABKAsyFC5nb29nbGUucHJvdG9idWYuQW55SABCCAoGcmVzdWx0IiMKE0dldE9wZXJhdGlvblJlcXVlc3QSDAoEbmFtZRgBIAEoCSJcChVMaXN0T3BlcmF0aW9uc1JlcXVlc3QSDAoEbmFtZRgEIAEoCRIOCgZmaWx0ZXIYASABKAkSEQoJcGFnZV9zaXplGAIgASgFEhIKCnBhZ2VfdG9rZW4YAyABKAkiZAoWTGlzdE9wZXJhdGlvbnNSZXNwb25zZRIxCgpvcGVyYXRpb25zGAEgAygLMh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbhIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiJgoWQ2FuY2VsT3BlcmF0aW9uUmVxdWVzdBIMCgRuYW1lGAEgASgJIiYKFkRlbGV0ZU9wZXJhdGlvblJlcXVlc3QSDAoEbmFtZRgBIAEoCSJQChRXYWl0T3BlcmF0aW9uUmVxdWVzdBIMCgRuYW1lGAEgASgJEioKB3RpbWVvdXQYAiABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb24iPQoNT3BlcmF0aW9uSW5mbxIVCg1yZXNwb25zZV90eXBlGAEgASgJEhUKDW1ldGFkYXRhX3R5cGUYAiABKAkyqgUKCk9wZXJhdGlvbnMSlAEKDkxpc3RPcGVyYXRpb25zEikuZ29vZ2xlLmxvbmdydW5uaW5nLkxpc3RPcGVyYXRpb25zUmVxdWVzdBoqLmdvb2dsZS5sb25ncnVubmluZy5MaXN0T3BlcmF0aW9uc1Jlc3BvbnNlIivaQQtuYW1lLGZpbHRlcoLT5JMCFxIVL3YxL3tuYW1lPW9wZXJhdGlvbnN9En8KDEdldE9wZXJhdGlvbhInLmdvb2dsZS5sb25ncnVubmluZy5HZXRPcGVyYXRpb25SZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiIn2kEEbmFtZYLT5JMCGhIYL3YxL3tuYW1lPW9wZXJhdGlvbnMvKip9En4KD0RlbGV0ZU9wZXJhdGlvbhIqLmdvb2dsZS5sb25ncnVubmluZy5EZWxldGVPcGVyYXRpb25SZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IifaQQRuYW1lgtPkkwIaKhgvdjEve25hbWU9b3BlcmF0aW9ucy8qKn0SiAEKD0NhbmNlbE9wZXJhdGlvbhIqLmdvb2dsZS5sb25ncnVubmluZy5DYW5jZWxPcGVyYXRpb25SZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IjHaQQRuYW1lgtPkkwIkOgEqIh8vdjEve25hbWU9b3BlcmF0aW9ucy8qKn06Y2FuY2VsEloKDVdhaXRPcGVyYXRpb24SKC5nb29nbGUubG9uZ3J1bm5pbmcuV2FpdE9wZXJhdGlvblJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIgAaHcpBGmxvbmdydW5uaW5nLmdvb2dsZWFwaXMuY29tOmkKDm9wZXJhdGlvbl9pbmZvEh4uZ29vZ2xlLnByb3RvYnVmLk1ldGhvZE9wdGlvbnMYmQggASgLMiEuZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbkluZm9SDW9wZXJhdGlvbkluZm9ClwEKFmNvbS5nb29nbGUubG9uZ3J1bm5pbmdCD09wZXJhdGlvbnNQcm90b1ABWj1nb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2xvbmdydW5uaW5nO2xvbmdydW5uaW5n+AEBqgISR29vZ2xlLkxvbmdSdW5uaW5nygISR29vZ2xlXExvbmdSdW5uaW5nYgZwcm90bzM", [annotations_pb_1.file_google_api_annotations, client_pb_1.file_google_api_client, wkt_1.file_google_protobuf_any, wkt_1.file_google_protobuf_duration, wkt_1.file_google_protobuf_empty, status_pb_1.file_google_rpc_status, wkt_1.file_google_protobuf_descriptor]);
/**
 * Describes the message google.longrunning.Operation.
 * Use `create(OperationSchema)` to create a new message.
 */
exports.OperationSchema = (0, codegenv2_1.messageDesc)(exports.file_google_longrunning_operations, 0);
/**
 * Describes the message google.longrunning.GetOperationRequest.
 * Use `create(GetOperationRequestSchema)` to create a new message.
 */
exports.GetOperationRequestSchema = (0, codegenv2_1.messageDesc)(exports.file_google_longrunning_operations, 1);
/**
 * Describes the message google.longrunning.ListOperationsRequest.
 * Use `create(ListOperationsRequestSchema)` to create a new message.
 */
exports.ListOperationsRequestSchema = (0, codegenv2_1.messageDesc)(exports.file_google_longrunning_operations, 2);
/**
 * Describes the message google.longrunning.ListOperationsResponse.
 * Use `create(ListOperationsResponseSchema)` to create a new message.
 */
exports.ListOperationsResponseSchema = (0, codegenv2_1.messageDesc)(exports.file_google_longrunning_operations, 3);
/**
 * Describes the message google.longrunning.CancelOperationRequest.
 * Use `create(CancelOperationRequestSchema)` to create a new message.
 */
exports.CancelOperationRequestSchema = (0, codegenv2_1.messageDesc)(exports.file_google_longrunning_operations, 4);
/**
 * Describes the message google.longrunning.DeleteOperationRequest.
 * Use `create(DeleteOperationRequestSchema)` to create a new message.
 */
exports.DeleteOperationRequestSchema = (0, codegenv2_1.messageDesc)(exports.file_google_longrunning_operations, 5);
/**
 * Describes the message google.longrunning.WaitOperationRequest.
 * Use `create(WaitOperationRequestSchema)` to create a new message.
 */
exports.WaitOperationRequestSchema = (0, codegenv2_1.messageDesc)(exports.file_google_longrunning_operations, 6);
/**
 * Describes the message google.longrunning.OperationInfo.
 * Use `create(OperationInfoSchema)` to create a new message.
 */
exports.OperationInfoSchema = (0, codegenv2_1.messageDesc)(exports.file_google_longrunning_operations, 7);
/**
 * Manages long-running operations with an API service.
 *
 * When an API method normally takes long time to complete, it can be designed
 * to return [Operation][google.longrunning.Operation] to the client, and the client can use this
 * interface to receive the real response asynchronously by polling the
 * operation resource, or pass the operation resource to another API (such as
 * Google Cloud Pub/Sub API) to receive the response.  Any API service that
 * returns long-running operations should implement the `Operations` interface
 * so developers can have a consistent client experience.
 *
 * @generated from service google.longrunning.Operations
 */
exports.Operations = (0, codegenv2_1.serviceDesc)(exports.file_google_longrunning_operations, 0);
/**
 * Additional information regarding long-running operations.
 * In particular, this specifies the types that are returned from
 * long-running operations.
 *
 * Required for methods that return `google.longrunning.Operation`; invalid
 * otherwise.
 *
 * @generated from extension: google.longrunning.OperationInfo operation_info = 1049;
 */
exports.operation_info = (0, codegenv2_1.extDesc)(exports.file_google_longrunning_operations, 0);
