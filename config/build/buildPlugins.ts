import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
      API: JSON.stringify(apiUrl)
    }),
    new ReactRefreshWebpackPlugin({ overlay: false }),
  ];

  plugins.push(
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    })
  );
  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
