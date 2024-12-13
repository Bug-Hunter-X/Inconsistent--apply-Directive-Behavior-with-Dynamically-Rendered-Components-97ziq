The solution uses the `classNames` library to conditionally apply classes based on component's props.  This removes the dependency on Tailwind's `@apply` for dynamic styling, thus addressing the inconsistency.

```jsx
import React from 'react';
import classNames from 'classnames';

function MyComponent({ active }) {
  return (
    <div
      className={classNames(
        'p-4', // Base styles
        active ? 'bg-blue-500 text-white' : 'bg-gray-200',
        // Example of conditionally applying more styles
      )}
    >
      {active ? 'Active' : 'Inactive'}
    </div>
  );
}

export default MyComponent;
```