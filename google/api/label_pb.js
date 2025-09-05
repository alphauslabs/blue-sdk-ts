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
exports.LabelDescriptor_ValueTypeSchema = exports.LabelDescriptor_ValueType = exports.LabelDescriptorSchema = exports.file_google_api_label = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
/**
 * Describes the file google/api/label.proto.
 */
exports.file_google_api_label = (0, codegenv2_1.fileDesc)("ChZnb29nbGUvYXBpL2xhYmVsLnByb3RvEgpnb29nbGUuYXBpIpwBCg9MYWJlbERlc2NyaXB0b3ISCwoDa2V5GAEgASgJEjkKCnZhbHVlX3R5cGUYAiABKA4yJS5nb29nbGUuYXBpLkxhYmVsRGVzY3JpcHRvci5WYWx1ZVR5cGUSEwoLZGVzY3JpcHRpb24YAyABKAkiLAoJVmFsdWVUeXBlEgoKBlNUUklORxAAEggKBEJPT0wQARIJCgVJTlQ2NBACQl8KDmNvbS5nb29nbGUuYXBpQgpMYWJlbFByb3RvUAFaNWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYXBpL2xhYmVsO2xhYmVs+AEBogIER0FQSWIGcHJvdG8z");
/**
 * Describes the message google.api.LabelDescriptor.
 * Use `create(LabelDescriptorSchema)` to create a new message.
 */
exports.LabelDescriptorSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_label, 0);
/**
 * Value types that can be used as label values.
 *
 * @generated from enum google.api.LabelDescriptor.ValueType
 */
var LabelDescriptor_ValueType;
(function (LabelDescriptor_ValueType) {
    /**
     * A variable-length string. This is the default.
     *
     * @generated from enum value: STRING = 0;
     */
    LabelDescriptor_ValueType[LabelDescriptor_ValueType["STRING"] = 0] = "STRING";
    /**
     * Boolean; true or false.
     *
     * @generated from enum value: BOOL = 1;
     */
    LabelDescriptor_ValueType[LabelDescriptor_ValueType["BOOL"] = 1] = "BOOL";
    /**
     * A 64-bit signed integer.
     *
     * @generated from enum value: INT64 = 2;
     */
    LabelDescriptor_ValueType[LabelDescriptor_ValueType["INT64"] = 2] = "INT64";
})(LabelDescriptor_ValueType || (exports.LabelDescriptor_ValueType = LabelDescriptor_ValueType = {}));
/**
 * Describes the enum google.api.LabelDescriptor.ValueType.
 */
exports.LabelDescriptor_ValueTypeSchema = (0, codegenv2_1.enumDesc)(exports.file_google_api_label, 0, 0);
