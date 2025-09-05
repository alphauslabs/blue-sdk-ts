"use strict";
// Copyright 2016 Google Inc.
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
exports.Property_PropertyTypeSchema = exports.Property_PropertyType = exports.PropertySchema = exports.ProjectPropertiesSchema = exports.file_google_api_consumer = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
/**
 * Describes the file google/api/consumer.proto.
 */
exports.file_google_api_consumer = (0, codegenv2_1.fileDesc)("Chlnb29nbGUvYXBpL2NvbnN1bWVyLnByb3RvEgpnb29nbGUuYXBpIj0KEVByb2plY3RQcm9wZXJ0aWVzEigKCnByb3BlcnRpZXMYASADKAsyFC5nb29nbGUuYXBpLlByb3BlcnR5IqwBCghQcm9wZXJ0eRIMCgRuYW1lGAEgASgJEi8KBHR5cGUYAiABKA4yIS5nb29nbGUuYXBpLlByb3BlcnR5LlByb3BlcnR5VHlwZRITCgtkZXNjcmlwdGlvbhgDIAEoCSJMCgxQcm9wZXJ0eVR5cGUSDwoLVU5TUEVDSUZJRUQQABIJCgVJTlQ2NBABEggKBEJPT0wQAhIKCgZTVFJJTkcQAxIKCgZET1VCTEUQBEJoCg5jb20uZ29vZ2xlLmFwaUINQ29uc3VtZXJQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9zZXJ2aWNlY29uZmlnO3NlcnZpY2Vjb25maWdiBnByb3RvMw");
/**
 * Describes the message google.api.ProjectProperties.
 * Use `create(ProjectPropertiesSchema)` to create a new message.
 */
exports.ProjectPropertiesSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_consumer, 0);
/**
 * Describes the message google.api.Property.
 * Use `create(PropertySchema)` to create a new message.
 */
exports.PropertySchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_consumer, 1);
/**
 * Supported data type of the property values
 *
 * @generated from enum google.api.Property.PropertyType
 */
var Property_PropertyType;
(function (Property_PropertyType) {
    /**
     * The type is unspecified, and will result in an error.
     *
     * @generated from enum value: UNSPECIFIED = 0;
     */
    Property_PropertyType[Property_PropertyType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * The type is `int64`.
     *
     * @generated from enum value: INT64 = 1;
     */
    Property_PropertyType[Property_PropertyType["INT64"] = 1] = "INT64";
    /**
     * The type is `bool`.
     *
     * @generated from enum value: BOOL = 2;
     */
    Property_PropertyType[Property_PropertyType["BOOL"] = 2] = "BOOL";
    /**
     * The type is `string`.
     *
     * @generated from enum value: STRING = 3;
     */
    Property_PropertyType[Property_PropertyType["STRING"] = 3] = "STRING";
    /**
     * The type is 'double'.
     *
     * @generated from enum value: DOUBLE = 4;
     */
    Property_PropertyType[Property_PropertyType["DOUBLE"] = 4] = "DOUBLE";
})(Property_PropertyType || (exports.Property_PropertyType = Property_PropertyType = {}));
/**
 * Describes the enum google.api.Property.PropertyType.
 */
exports.Property_PropertyTypeSchema = (0, codegenv2_1.enumDesc)(exports.file_google_api_consumer, 1, 0);
