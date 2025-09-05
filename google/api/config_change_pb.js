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
exports.ChangeTypeSchema = exports.ChangeType = exports.AdviceSchema = exports.ConfigChangeSchema = exports.file_google_api_config_change = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
/**
 * Describes the file google/api/config_change.proto.
 */
exports.file_google_api_config_change = (0, codegenv2_1.fileDesc)("Ch5nb29nbGUvYXBpL2NvbmZpZ19jaGFuZ2UucHJvdG8SCmdvb2dsZS5hcGkilwEKDENvbmZpZ0NoYW5nZRIPCgdlbGVtZW50GAEgASgJEhEKCW9sZF92YWx1ZRgCIAEoCRIRCgluZXdfdmFsdWUYAyABKAkSKwoLY2hhbmdlX3R5cGUYBCABKA4yFi5nb29nbGUuYXBpLkNoYW5nZVR5cGUSIwoHYWR2aWNlcxgFIAMoCzISLmdvb2dsZS5hcGkuQWR2aWNlIh0KBkFkdmljZRITCgtkZXNjcmlwdGlvbhgCIAEoCSpPCgpDaGFuZ2VUeXBlEhsKF0NIQU5HRV9UWVBFX1VOU1BFQ0lGSUVEEAASCQoFQURERUQQARILCgdSRU1PVkVEEAISDAoITU9ESUZJRUQQA0JxCg5jb20uZ29vZ2xlLmFwaUIRQ29uZmlnQ2hhbmdlUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvY29uZmlnY2hhbmdlO2NvbmZpZ2NoYW5nZaICBEdBUEliBnByb3RvMw");
/**
 * Describes the message google.api.ConfigChange.
 * Use `create(ConfigChangeSchema)` to create a new message.
 */
exports.ConfigChangeSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_config_change, 0);
/**
 * Describes the message google.api.Advice.
 * Use `create(AdviceSchema)` to create a new message.
 */
exports.AdviceSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_config_change, 1);
/**
 * Classifies set of possible modifications to an object in the service
 * configuration.
 *
 * @generated from enum google.api.ChangeType
 */
var ChangeType;
(function (ChangeType) {
    /**
     * No value was provided.
     *
     * @generated from enum value: CHANGE_TYPE_UNSPECIFIED = 0;
     */
    ChangeType[ChangeType["CHANGE_TYPE_UNSPECIFIED"] = 0] = "CHANGE_TYPE_UNSPECIFIED";
    /**
     * The changed object exists in the 'new' service configuration, but not
     * in the 'old' service configuration.
     *
     * @generated from enum value: ADDED = 1;
     */
    ChangeType[ChangeType["ADDED"] = 1] = "ADDED";
    /**
     * The changed object exists in the 'old' service configuration, but not
     * in the 'new' service configuration.
     *
     * @generated from enum value: REMOVED = 2;
     */
    ChangeType[ChangeType["REMOVED"] = 2] = "REMOVED";
    /**
     * The changed object exists in both service configurations, but its value
     * is different.
     *
     * @generated from enum value: MODIFIED = 3;
     */
    ChangeType[ChangeType["MODIFIED"] = 3] = "MODIFIED";
})(ChangeType || (exports.ChangeType = ChangeType = {}));
/**
 * Describes the enum google.api.ChangeType.
 */
exports.ChangeTypeSchema = (0, codegenv2_1.enumDesc)(exports.file_google_api_config_change, 0);
