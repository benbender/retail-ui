import * as React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableProps,
  TableRow,
  TableWrapper,
} from '../src'

const meta = {
  title: 'Retail-UI/Table',
  component: Table,
}

export default meta

const Template = (args: TableProps) => (
  <TableWrapper>
    <Table {...args} data-testid={meta.title}>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell>Client</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center text-sm">
              {/* <!-- Avatar with inset shadow --> */}
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  alt=""
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                ></div>
              </div>
              <div>
                <p className="font-semibold">Hans Burger</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  10x Developer
                </p>
              </div>
            </div>
          </TableCell>
          <TableCell>$ 863.45</TableCell>
          <TableCell>
            <span className="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
              Approved
            </span>
          </TableCell>
          <TableCell>6/10/2020</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <TableFooter
      onChange={() => {}}
      totalResults={50}
      resultsPerPage={100}
      label={''}
    />
    {/* <!-- Charts --> */}
  </TableWrapper>
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
