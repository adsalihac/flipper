/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';
import {Space} from 'antd';
import {PowerSearchConfig} from './PowerSearchConfig';
import {PowerSearchContainer} from './PowerSearchContainer';
import {PowerSearchTerm, SearchExpressionTerm} from './PowerSearchTerm';
import {
  PowerSearchTermFinder,
  PowerSearchTermFinderOption,
  PowerSearchTermFinderOptionGroup,
} from './PowerSearchTermFinder';

export {PowerSearchConfig};

type PowerSearchProps = {
  config: PowerSearchConfig;
};

const OPTION_KEY_DELIMITER = '::';

export const PowerSearch: React.FC<PowerSearchProps> = ({config}) => {
  const [searchExpression, setSearchExpression] = React.useState<
    SearchExpressionTerm[]
  >([]);

  const options: PowerSearchTermFinderOptionGroup[] = React.useMemo(() => {
    const groupedOptions: PowerSearchTermFinderOptionGroup[] = [];

    for (const field of Object.values(config.fields)) {
      const group: PowerSearchTermFinderOptionGroup = {
        label: field.label,
        options: [],
        value: field.key,
      };

      for (const operator of Object.values(field.operators)) {
        const option: PowerSearchTermFinderOption = {
          label: `${field.label} ${operator.label}`,
          value: `${field.key}${OPTION_KEY_DELIMITER}${operator.key}`,
        };
        group.options.push(option);
      }

      groupedOptions.push(group);
    }

    return groupedOptions;
  }, [config.fields]);

  const lastSearchTermHasSearchValue =
    searchExpression.length > 0
      ? searchExpression[searchExpression.length - 1].searchValue !== undefined
      : false;

  const searchTermFinderRef = React.useRef<{
    focus: () => void;
    blur: () => void;
    scrollTo: () => void;
  }>(null);

  return (
    <PowerSearchContainer>
      <Space size={[0, 8]}>
        {searchExpression.map((searchTerm, i) => {
          const isLastTerm = i === searchExpression.length - 1;

          return (
            <PowerSearchTerm
              key={i.toString()}
              searchTerm={searchTerm}
              searchValueRenderer={
                lastSearchTermHasSearchValue || !isLastTerm ? 'button' : 'input'
              }
              onCancel={() => {
                setSearchExpression((prevSearchExpression) => {
                  if (prevSearchExpression[i]) {
                    return [
                      ...prevSearchExpression.slice(0, i),
                      ...prevSearchExpression.slice(i + 1),
                    ];
                  }
                  return prevSearchExpression;
                });
              }}
              onFinalize={(finalSearchTerm) => {
                setSearchExpression((prevSearchExpression) => {
                  return [
                    ...prevSearchExpression.slice(0, -1),
                    finalSearchTerm,
                  ];
                });
                searchTermFinderRef.current?.focus();
              }}
            />
          );
        })}
      </Space>
      <PowerSearchTermFinder
        ref={searchTermFinderRef}
        options={options}
        onSelect={(selectedOption) => {
          const [fieldKey, operatorKey] =
            selectedOption.value.split(OPTION_KEY_DELIMITER);
          const fieldConfig = config.fields[fieldKey];
          const operatorConfig = fieldConfig.operators[operatorKey];

          setSearchExpression((prevSearchExpression) => [
            ...prevSearchExpression,
            {
              field: fieldConfig,
              operator: operatorConfig,
            },
          ]);
        }}
      />
    </PowerSearchContainer>
  );
};
