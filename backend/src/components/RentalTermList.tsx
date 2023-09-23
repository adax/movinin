import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { strings } from '../lang/rental-term'
import * as movininTypes from 'movinin-types'

const RentalTermList = (
  {
    value: rentalTermValue,
    required,
    label,
    variant,
    onChange
  }:
    {
      value?: string,
      required?: boolean,
      label?: string
      variant?: 'filled' | 'standard' | 'outlined'
      onChange?: (value: string) => void
    }
) => {
  const [value, setValue] = useState(rentalTermValue || '')
  useEffect(() => {
    setValue(rentalTermValue || '')
  }, [rentalTermValue])

  const handleChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value || ''
    setValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div>
      <InputLabel className={required ? 'required' : ''}>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        onChange={handleChange}
        variant={variant || 'standard'}
        required={required}
        fullWidth
      >
        <MenuItem value={movininTypes.RentalTerm.Monthly}>{strings.MONTHLY}</MenuItem>
        <MenuItem value={movininTypes.RentalTerm.Weekly}>{strings.WEEKLY}</MenuItem>
        <MenuItem value={movininTypes.RentalTerm.Daily}>{strings.DAILY}</MenuItem>
        <MenuItem value={movininTypes.RentalTerm.Yearly}>{strings.YEARLY}</MenuItem>
      </Select>
    </div>
  )
}

export default RentalTermList