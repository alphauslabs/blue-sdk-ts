"use strict";
// Copyright 2019 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.field_behavior = exports.FieldBehaviorSchema = exports.FieldBehavior = exports.file_google_api_field_behavior = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file google/api/field_behavior.proto.
 */
exports.file_google_api_field_behavior = (0, codegenv2_1.fileDesc)("Ch9nb29nbGUvYXBpL2ZpZWxkX2JlaGF2aW9yLnByb3RvEgpnb29nbGUuYXBpKnsKDUZpZWxkQmVoYXZpb3ISHgoaRklFTERfQkVIQVZJT1JfVU5TUEVDSUZJRUQQABIMCghPUFRJT05BTBABEgwKCFJFUVVJUkVEEAISDwoLT1VUUFVUX09OTFkQAxIOCgpJTlBVVF9PTkxZEAQSDQoJSU1NVVRBQkxFEAU6YAoOZmllbGRfYmVoYXZpb3ISHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGJwIIAMoDjIZLmdvb2dsZS5hcGkuRmllbGRCZWhhdmlvclINZmllbGRCZWhhdmlvckJwCg5jb20uZ29vZ2xlLmFwaUISRmllbGRCZWhhdmlvclByb3RvUAFaQWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYXBpL2Fubm90YXRpb25zO2Fubm90YXRpb25zogIER0FQSWIGcHJvdG8z", [wkt_1.file_google_protobuf_descriptor]);
/**
 * An indicator of the behavior of a given field (for example, that a field
 * is required in requests, or given as output but ignored as input).
 * This **does not** change the behavior in protocol buffers itself; it only
 * denotes the behavior and may affect how API tooling handles the field.
 *
 * Note: This enum **may** receive new values in the future.
 *
 * @generated from enum google.api.FieldBehavior
 */
var FieldBehavior;
(function (FieldBehavior) {
    /**
     * Conventional default for enums. Do not use this.
     *
     * @generated from enum value: FIELD_BEHAVIOR_UNSPECIFIED = 0;
     */
    FieldBehavior[FieldBehavior["FIELD_BEHAVIOR_UNSPECIFIED"] = 0] = "FIELD_BEHAVIOR_UNSPECIFIED";
    /**
     * Specifically denotes a field as optional.
     * While all fields in protocol buffers are optional, this may be specified
     * for emphasis if appropriate.
     *
     * @generated from enum value: OPTIONAL = 1;
     */
    FieldBehavior[FieldBehavior["OPTIONAL"] = 1] = "OPTIONAL";
    /**
     * Denotes a field as required.
     * This indicates that the field **must** be provided as part of the request,
     * and failure to do so will cause an error (usually `INVALID_ARGUMENT`).
     *
     * @generated from enum value: REQUIRED = 2;
     */
    FieldBehavior[FieldBehavior["REQUIRED"] = 2] = "REQUIRED";
    /**
     * Denotes a field as output only.
     * This indicates that the field is provided in responses, but including the
     * field in a request does nothing (the server *must* ignore it and
     * *must not* throw an error as a result of the field's presence).
     *
     * @generated from enum value: OUTPUT_ONLY = 3;
     */
    FieldBehavior[FieldBehavior["OUTPUT_ONLY"] = 3] = "OUTPUT_ONLY";
    /**
     * Denotes a field as input only.
     * This indicates that the field is provided in requests, and the
     * corresponding field is not included in output.
     *
     * @generated from enum value: INPUT_ONLY = 4;
     */
    FieldBehavior[FieldBehavior["INPUT_ONLY"] = 4] = "INPUT_ONLY";
    /**
     * Denotes a field as immutable.
     * This indicates that the field may be set once in a request to create a
     * resource, but may not be changed thereafter.
     *
     * @generated from enum value: IMMUTABLE = 5;
     */
    FieldBehavior[FieldBehavior["IMMUTABLE"] = 5] = "IMMUTABLE";
})(FieldBehavior || (exports.FieldBehavior = FieldBehavior = {}));
/**
 * Describes the enum google.api.FieldBehavior.
 */
exports.FieldBehaviorSchema = (0, codegenv2_1.enumDesc)(exports.file_google_api_field_behavior, 0);
/**
 * A designation of a specific field behavior (required, output only, etc.)
 * in protobuf messages.
 *
 * Examples:
 *
 *   string name = 1 [(google.api.field_behavior) = REQUIRED];
 *   State state = 1 [(google.api.field_behavior) = OUTPUT_ONLY];
 *   google.protobuf.Duration ttl = 1
 *     [(google.api.field_behavior) = INPUT_ONLY];
 *   google.protobuf.Timestamp expire_time = 1
 *     [(google.api.field_behavior) = OUTPUT_ONLY,
 *      (google.api.field_behavior) = IMMUTABLE];
 *
 * @generated from extension: repeated google.api.FieldBehavior field_behavior = 1052;
 */
exports.field_behavior = (0, codegenv2_1.extDesc)(exports.file_google_api_field_behavior, 0);
