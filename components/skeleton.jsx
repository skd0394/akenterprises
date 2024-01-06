import React from 'react'

const Skeleton = () => {
  return (
    <div>
      <div class="shadow rounded-md w-[200px] h-[280px]">
        <div class="animate-pulse">
          <div class="rounded-md bg-slate-500 h-[150px] w-[200px]"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-500 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-500 rounded col-span-2"></div>
                <div class="h-2 bg-slate-500 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton