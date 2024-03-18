await Bun.build({
    entrypoints: ['./index.ts'],
    outdir: '.',
    target: 'node'
});

export { }