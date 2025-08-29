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
exports.AuthRequirementSchema = exports.OAuthRequirementsSchema = exports.AuthProviderSchema = exports.AuthenticationRuleSchema = exports.AuthenticationSchema = exports.file_google_api_auth = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const annotations_pb_1 = require("./annotations_pb");
/**
 * Describes the file google/api/auth.proto.
 */
exports.file_google_api_auth = (0, codegenv2_1.fileDesc)("ChVnb29nbGUvYXBpL2F1dGgucHJvdG8SCmdvb2dsZS5hcGkibAoOQXV0aGVudGljYXRpb24SLQoFcnVsZXMYAyADKAsyHi5nb29nbGUuYXBpLkF1dGhlbnRpY2F0aW9uUnVsZRIrCglwcm92aWRlcnMYBCADKAsyGC5nb29nbGUuYXBpLkF1dGhQcm92aWRlciKpAQoSQXV0aGVudGljYXRpb25SdWxlEhAKCHNlbGVjdG9yGAEgASgJEiwKBW9hdXRoGAIgASgLMh0uZ29vZ2xlLmFwaS5PQXV0aFJlcXVpcmVtZW50cxIgChhhbGxvd193aXRob3V0X2NyZWRlbnRpYWwYBSABKAgSMQoMcmVxdWlyZW1lbnRzGAcgAygLMhsuZ29vZ2xlLmFwaS5BdXRoUmVxdWlyZW1lbnQiagoMQXV0aFByb3ZpZGVyEgoKAmlkGAEgASgJEg4KBmlzc3VlchgCIAEoCRIQCghqd2tzX3VyaRgDIAEoCRIRCglhdWRpZW5jZXMYBCABKAkSGQoRYXV0aG9yaXphdGlvbl91cmwYBSABKAkiLQoRT0F1dGhSZXF1aXJlbWVudHMSGAoQY2Fub25pY2FsX3Njb3BlcxgBIAEoCSI5Cg9BdXRoUmVxdWlyZW1lbnQSEwoLcHJvdmlkZXJfaWQYASABKAkSEQoJYXVkaWVuY2VzGAIgASgJQmsKDmNvbS5nb29nbGUuYXBpQglBdXRoUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvc2VydmljZWNvbmZpZztzZXJ2aWNlY29uZmlnogIER0FQSWIGcHJvdG8z", [annotations_pb_1.file_google_api_annotations]);
/**
 * Describes the message google.api.Authentication.
 * Use `create(AuthenticationSchema)` to create a new message.
 */
exports.AuthenticationSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_auth, 0);
/**
 * Describes the message google.api.AuthenticationRule.
 * Use `create(AuthenticationRuleSchema)` to create a new message.
 */
exports.AuthenticationRuleSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_auth, 1);
/**
 * Describes the message google.api.AuthProvider.
 * Use `create(AuthProviderSchema)` to create a new message.
 */
exports.AuthProviderSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_auth, 2);
/**
 * Describes the message google.api.OAuthRequirements.
 * Use `create(OAuthRequirementsSchema)` to create a new message.
 */
exports.OAuthRequirementsSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_auth, 3);
/**
 * Describes the message google.api.AuthRequirement.
 * Use `create(AuthRequirementSchema)` to create a new message.
 */
exports.AuthRequirementSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_auth, 4);
