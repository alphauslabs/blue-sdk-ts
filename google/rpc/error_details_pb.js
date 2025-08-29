"use strict";
// Copyright 2020 Google LLC
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
exports.LocalizedMessageSchema = exports.Help_LinkSchema = exports.HelpSchema = exports.ResourceInfoSchema = exports.RequestInfoSchema = exports.BadRequest_FieldViolationSchema = exports.BadRequestSchema = exports.PreconditionFailure_ViolationSchema = exports.PreconditionFailureSchema = exports.ErrorInfoSchema = exports.QuotaFailure_ViolationSchema = exports.QuotaFailureSchema = exports.DebugInfoSchema = exports.RetryInfoSchema = exports.file_google_rpc_error_details = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file google/rpc/error_details.proto.
 */
exports.file_google_rpc_error_details = (0, codegenv2_1.fileDesc)("Ch5nb29nbGUvcnBjL2Vycm9yX2RldGFpbHMucHJvdG8SCmdvb2dsZS5ycGMiOwoJUmV0cnlJbmZvEi4KC3JldHJ5X2RlbGF5GAEgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uIjIKCURlYnVnSW5mbxIVCg1zdGFja19lbnRyaWVzGAEgAygJEg4KBmRldGFpbBgCIAEoCSJ5CgxRdW90YUZhaWx1cmUSNgoKdmlvbGF0aW9ucxgBIAMoCzIiLmdvb2dsZS5ycGMuUXVvdGFGYWlsdXJlLlZpb2xhdGlvbhoxCglWaW9sYXRpb24SDwoHc3ViamVjdBgBIAEoCRITCgtkZXNjcmlwdGlvbhgCIAEoCSKTAQoJRXJyb3JJbmZvEg4KBnJlYXNvbhgBIAEoCRIOCgZkb21haW4YAiABKAkSNQoIbWV0YWRhdGEYAyADKAsyIy5nb29nbGUucnBjLkVycm9ySW5mby5NZXRhZGF0YUVudHJ5Gi8KDU1ldGFkYXRhRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASKVAQoTUHJlY29uZGl0aW9uRmFpbHVyZRI9Cgp2aW9sYXRpb25zGAEgAygLMikuZ29vZ2xlLnJwYy5QcmVjb25kaXRpb25GYWlsdXJlLlZpb2xhdGlvbho/CglWaW9sYXRpb24SDAoEdHlwZRgBIAEoCRIPCgdzdWJqZWN0GAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJIoMBCgpCYWRSZXF1ZXN0Ej8KEGZpZWxkX3Zpb2xhdGlvbnMYASADKAsyJS5nb29nbGUucnBjLkJhZFJlcXVlc3QuRmllbGRWaW9sYXRpb24aNAoORmllbGRWaW9sYXRpb24SDQoFZmllbGQYASABKAkSEwoLZGVzY3JpcHRpb24YAiABKAkiNwoLUmVxdWVzdEluZm8SEgoKcmVxdWVzdF9pZBgBIAEoCRIUCgxzZXJ2aW5nX2RhdGEYAiABKAkiYAoMUmVzb3VyY2VJbmZvEhUKDXJlc291cmNlX3R5cGUYASABKAkSFQoNcmVzb3VyY2VfbmFtZRgCIAEoCRINCgVvd25lchgDIAEoCRITCgtkZXNjcmlwdGlvbhgEIAEoCSJWCgRIZWxwEiQKBWxpbmtzGAEgAygLMhUuZ29vZ2xlLnJwYy5IZWxwLkxpbmsaKAoETGluaxITCgtkZXNjcmlwdGlvbhgBIAEoCRILCgN1cmwYAiABKAkiMwoQTG9jYWxpemVkTWVzc2FnZRIOCgZsb2NhbGUYASABKAkSDwoHbWVzc2FnZRgCIAEoCUJsCg5jb20uZ29vZ2xlLnJwY0IRRXJyb3JEZXRhaWxzUHJvdG9QAVo/Z29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9ycGMvZXJyZGV0YWlscztlcnJkZXRhaWxzogIDUlBDYgZwcm90bzM", [wkt_1.file_google_protobuf_duration]);
/**
 * Describes the message google.rpc.RetryInfo.
 * Use `create(RetryInfoSchema)` to create a new message.
 */
exports.RetryInfoSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 0);
/**
 * Describes the message google.rpc.DebugInfo.
 * Use `create(DebugInfoSchema)` to create a new message.
 */
exports.DebugInfoSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 1);
/**
 * Describes the message google.rpc.QuotaFailure.
 * Use `create(QuotaFailureSchema)` to create a new message.
 */
exports.QuotaFailureSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 2);
/**
 * Describes the message google.rpc.QuotaFailure.Violation.
 * Use `create(QuotaFailure_ViolationSchema)` to create a new message.
 */
exports.QuotaFailure_ViolationSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 2, 0);
/**
 * Describes the message google.rpc.ErrorInfo.
 * Use `create(ErrorInfoSchema)` to create a new message.
 */
exports.ErrorInfoSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 3);
/**
 * Describes the message google.rpc.PreconditionFailure.
 * Use `create(PreconditionFailureSchema)` to create a new message.
 */
exports.PreconditionFailureSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 4);
/**
 * Describes the message google.rpc.PreconditionFailure.Violation.
 * Use `create(PreconditionFailure_ViolationSchema)` to create a new message.
 */
exports.PreconditionFailure_ViolationSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 4, 0);
/**
 * Describes the message google.rpc.BadRequest.
 * Use `create(BadRequestSchema)` to create a new message.
 */
exports.BadRequestSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 5);
/**
 * Describes the message google.rpc.BadRequest.FieldViolation.
 * Use `create(BadRequest_FieldViolationSchema)` to create a new message.
 */
exports.BadRequest_FieldViolationSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 5, 0);
/**
 * Describes the message google.rpc.RequestInfo.
 * Use `create(RequestInfoSchema)` to create a new message.
 */
exports.RequestInfoSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 6);
/**
 * Describes the message google.rpc.ResourceInfo.
 * Use `create(ResourceInfoSchema)` to create a new message.
 */
exports.ResourceInfoSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 7);
/**
 * Describes the message google.rpc.Help.
 * Use `create(HelpSchema)` to create a new message.
 */
exports.HelpSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 8);
/**
 * Describes the message google.rpc.Help.Link.
 * Use `create(Help_LinkSchema)` to create a new message.
 */
exports.Help_LinkSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 8, 0);
/**
 * Describes the message google.rpc.LocalizedMessage.
 * Use `create(LocalizedMessageSchema)` to create a new message.
 */
exports.LocalizedMessageSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_error_details, 9);
